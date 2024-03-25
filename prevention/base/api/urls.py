from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from . import views
from .views import Profile_detail
urlpatterns = [
    
    path('token/', views.LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/<str:pk>',Profile_detail.as_view(),name='profile_detail'),
]