from django.urls import path

from . import views

urlpatterns = [
    path("",views.camp.as_view())
]