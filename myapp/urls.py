from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from .views import (
    students, user_list, student_list, quiz_list, badge_list,
    index, about, contact_us, courses, login_view, register,
    forgot_password, reset_password, verify_email,
    library, parents_dashboard, parents_profile, parents_students,
    pricing, settings, students_view, teachers, students_dashboard, support,
    your_logout_view
)

urlpatterns = [
    path('api/users/', user_list, name='user-list'),
    path('api/students/', student_list, name='student-list'),
    path('api/quizzes/', quiz_list, name='quiz-list'),
    path('api/badges/', badge_list, name='badge-list'),

    path('', index, name='index'),
    path('about/', about, name='about'),
    path('contact-us/', contact_us, name='contact_us'),
    path('courses/', courses, name='courses'),
    path('login/', login_view, name='login'),
    path('register/', register, name='register'),
    path('forgot-password/', forgot_password, name='forgot_password'),
    path('reset-password/', reset_password, name='reset_password'),
    path('verify-email/', verify_email, name='verify_email'),

    path('user/library/', library, name='library'),
    path('user/parents-dashboard/', parents_dashboard, name='parents_dashboard'),
    path('user/parents-profile/', parents_profile, name='parents_profile'),
    path('user/parents-students/', parents_students, name='parents_students'),
    path('user/pricing/', pricing, name='pricing'),
    path('user/settings/', settings, name='settings'),
    path('user/students/', students_view, name='students_view'),
    path('user/teachers/', teachers, name='teachers'),
    path('user/students-dashboard/', students_dashboard, name='students_dashboard'),
    path('user/support/', support, name='support'),
    path('user/students/', students, name='students'),
    path('logout/', your_logout_view, name='your_logout'),
]
