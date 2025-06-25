from django.db import models

class User(models.Model):
      user_id = models.AutoField(primary_key=True)
      role = models.CharField(max_length=50)
      email = models.EmailField(unique=True)
      password_hash = models.CharField(max_length=255)

class Student(models.Model):
      student_id = models.AutoField(primary_key=True)
      parent = models.ForeignKey(User, on_delete=models.CASCADE)
      grade = models.CharField(max_length=10)
      school = models.CharField(max_length=100)
      progress = models.JSONField()

      def __str__(self):
        return self.user.username

class Quiz(models.Model):
      quiz_id = models.AutoField(primary_key=True)
      subject = models.CharField(max_length=50)
      score = models.FloatField()
      student = models.ForeignKey(Student, on_delete=models.CASCADE)

    

class Badge(models.Model):
      badge_id = models.AutoField(primary_key=True)
      student = models.ForeignKey(Student, on_delete=models.CASCADE)
      name = models.CharField(max_length=100)
  
