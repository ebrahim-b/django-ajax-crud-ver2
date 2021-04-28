from django.shortcuts import render
from .forms import StudentRegistration
from .models import User
from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt


def home(request):
    form = StudentRegistration()
    students = User.objects.all()
    return render(request,'blog/home.html',{'form':form, 'students':students})

# @csrf_exempt
def save_data(request):
    if request.method == 'POST':
        form = StudentRegistration(request.POST)
        if form.is_valid():
            name = request.POST['name']
            email = request.POST['email']
            password = request.POST['password']
            usr = User(name=name, email=email, password=password)
            usr.save()
            return JsonResponse({'status': 'save'})
        else:
            return JsonResponse({'status': 0})
