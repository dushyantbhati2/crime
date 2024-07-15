from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


def authenticate_user(username, password):
    try:
        if "@" in username:
            user = get_object_or_404(User, email=username)
            user = authenticate(username=user.username, password=password)
        else:
            user = authenticate(username=username, password=password)

        if user is not None:
            return user
        else:
            return None
    except User.DoesNotExist:
        return None
    except Exception:
        return None
