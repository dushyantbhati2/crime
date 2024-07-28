from django.urls import path

from . import views

urlpatterns = [
    path("allposts/", views.posts.as_view(), name="posts"),
    path("allposts/<uuid:pk>", views.posts.as_view(), name="posts"),
    path("comments/<uuid:pk>", views.comments.as_view(), name="comments"),
    path("comment/<uuid:pk>/reply/", views.Reply.as_view(), name="reply"),
    path("comment/<uuid:pk>/reply/<uuid:reply_id>", views.Reply.as_view(), name="reply"),
    path("likeComment/<uuid:reply_id>", views.CommentLike.as_view(), name="likecomment"),
    path("likes/<uuid:pk>", views.Likes.as_view(), name="likes"),
    path("bookmark/<uuid:pk>", views.Bookmark.as_view(), name="Bookmarks"),
    path("bookmark/", views.Bookmark.as_view(), name="Bookmarks"),
    path("<uuid:pk>", views.Community.as_view(), name="Community"),
    path("", views.Community.as_view(), name="Community"),
    path("likes/", views.Likes.as_view(), name="likes"),
    path("following/", views.FollowView.as_view()),
    path("following/<str:pk>/", views.FollowView.as_view()),
]
