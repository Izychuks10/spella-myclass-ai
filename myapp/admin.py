from django.contrib import admin
from .models import User, Student, Quiz, Badge  # Import all models

# Register models for Django Admin
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'role']  # Columns shown in admin list
    search_fields = ['email']         # Add search functionality

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['student_id', 'parent', 'grade']
    list_filter = ['grade']           # Add filters

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ['quiz_id', 'subject', 'score', 'student']

@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    list_display = ['badge_id', 'name', 'student']

