from django.urls import path

from .views import ProfileDetail

urlpatterns = [
    path("<str:pk>/", ProfileDetail.as_view(), name="profile_detail"),
]
