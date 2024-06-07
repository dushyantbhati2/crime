from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
from .views import Profile_detail

urlpatterns = [
    path('token/', views.LoginView.as_view(), name='login'),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('completeProfile/', views.CompleteProfile.as_view(), name='completeProfile'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/<str:pk>', Profile_detail.as_view(), name='profile_detail'),
    path('map/', views.map.as_view(), name='map'),
    path('allposts/', views.posts.as_view(), name='posts'),
    path('allposts/<uuid:pk>', views.posts.as_view(), name='posts'),
    path('comments/<uuid:pk>', views.comments.as_view(), name='comments'),
    path('likes/<uuid:pk>',views.Likes.as_view(),name='likes'),
    path('bookmark/<uuid:pk>',views.Bookmark.as_view(),name = 'Bookmarks'),
    path('bookmark/',views.Bookmark.as_view(),name = 'Bookmarks'),
    path('community/<uuid:pk>',views.Community.as_view(),name = 'Community'),
    path('community/',views.Community.as_view(),name = 'Community'),

    # path('allposts/<uuid:pk>/delete/', views.deletepost.as_view(), name='deletepost'),
]