from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from . import views
<<<<<<< HEAD
urlpatterns = [
    
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
=======
from .views import Profile_detail
urlpatterns = [
    
    path('token/', views.LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/<str:pk>',Profile_detail.as_view(),name='profile_detail'),
>>>>>>> origin/backend
]