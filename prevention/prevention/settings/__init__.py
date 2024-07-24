import os
from pathlib import Path

from split_settings.tools import include, optional

# Define the base directory
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Environment variable prefix for settings
ENVVAR_SETTINGS_PREFIX = "CORESETTING_"

# Fetch the local settings path from the environment variable
LOCAL_SETTINGS_PATH = os.getenv(f"{ENVVAR_SETTINGS_PREFIX}LOCAL_SETTINGS_PATH")
if not LOCAL_SETTINGS_PATH:
    LOCAL_SETTINGS_PATH = "local/settings.dev.py"

# Ensure the local settings path is absolute
if not os.path.isabs(LOCAL_SETTINGS_PATH):
    LOCAL_SETTINGS_PATH = str(BASE_DIR / LOCAL_SETTINGS_PATH)

# Include the base settings and the local settings
include(
    "base.py",  # Ensure you have a base.py with the common settings
    "custom.py",
    optional(LOCAL_SETTINGS_PATH),
    "envvars.py",
)

# Capture warnings
# import logging
# logging.captureWarnings(True)

# # Function to check if pytest is running
# def is_pytest_running():
#     import sys
#     return 'pytest' in sys.modules

# # Ensure the SECRET_KEY is set, except during tests
# if not is_pytest_running():
#     assert settings.SECRET_KEY is not NotImplemented  # type: ignore # noqa: F821

# # Ensure ALLOWED_HOSTS is set if DEBUG is False
# if not settings.DEBUG:
#     if not settings.ALLOWED_HOSTS:
#         raise ValueError("You must set settings.ALLOWED_HOSTS if DEBUG is False.")
