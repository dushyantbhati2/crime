from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from . import views
from .views import Profile_detail
urlpatterns = [
    
    path('token/', views.LoginView.as_view(), name='login'),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('completeProfile/',views.CompleteProfile.as_view(),name='completeProfile'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/<str:pk>',Profile_detail.as_view(),name='profile_detail'),
    path('map/',views.map.as_view(),name='map'),
    path('allposts/',views.posts.as_view(),name='posts'),
    path('allposts/<uuid:pk>',views.posts.as_view(),name='posts'),
    # path('deletepost/<uuid:pk>',views.deletepost.as_view(),name='deletepost'),
]