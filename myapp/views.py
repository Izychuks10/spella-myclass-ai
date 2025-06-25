from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import HttpResponse
from django.utils.cache import patch_cache_control

from .forms import CustomLoginForm, UserRegistrationForm

# --- API Placeholders ---

def user_list(request):
    return HttpResponse("This is a placeholder for User API list.")

def student_list(request):
    return HttpResponse("This is a placeholder for Student API list.")

def quiz_list(request):
    return HttpResponse("This is a placeholder for Quiz API list.")

def badge_list(request):
    return HttpResponse("This is a placeholder for Badge API list.")

# --- Public Pages ---

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact_us(request):
    return render(request, 'contact-us.html')

def courses(request):
    return render(request, 'courses.html')

def login_view(request):
    if request.method == 'POST':
        form = CustomLoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f"Welcome back, {user.username}!")
                return redirect('students_dashboard')
            else:
                messages.error(request, "Invalid email or password.")
        else:
            messages.error(request, "Please correct the errors below.")
    else:
        form = CustomLoginForm()
    return render(request, 'login.html', {'form': form})

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Registration successful! You can now log in.")
            return redirect('login')
        else:
            messages.error(request, "Please correct the errors below.")
    else:
        form = UserRegistrationForm()
    return render(request, 'register.html', {'form': form})

def forgot_password(request):
    return render(request, 'forgot-password.html')

def reset_password(request):
    return render(request, 'reset-password.html')

def verify_email(request):
    return render(request, 'verify-email.html')

# --- Authenticated User Pages ---

@login_required
def library(request):
    return render(request, 'user/library.html')

@login_required
def parents_dashboard(request):
    return render(request, 'user/parents-dashboard.html')

@login_required
def parents_profile(request):
    return render(request, 'user/parents-profile.html')

@login_required
def parents_students(request):
    return render(request, 'user/parents-students.html')

@login_required
def pricing(request):
    return render(request, 'user/pricing.html')

@login_required
def settings(request):
    return render(request, 'user/settings.html')

@login_required
def students_view(request):
    return render(request, 'user/students.html')

@login_required
def teachers(request):
    return render(request, 'user/teachers.html')

@login_required
def students_dashboard(request):
    return render(request, 'user/students-dashboard.html')

@login_required
def support(request):
    return render(request, 'user/support.html')

@login_required
def students(request):
    return render(request, 'user/students.html')

@login_required
def your_logout_view(request):
    logout(request)  # Log the user out
    response = redirect('login')  # Redirect to your index page
    patch_cache_control(response, no_cache=True, must_revalidate=True, no_store=True) #prevent back
    return response
    