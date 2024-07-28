from django.urls import path

from . import views

urlpatterns = [
    path("",views.camp.as_view()),
    path("<uuid:pk>",views.camp.as_view())
    
]