# Import some utility functions
from os.path import join

# Fetch our common settings
from .common import *

# #########################################################

# ##### DEBUG CONFIGURATION ###############################
DEBUG = True


# ##### DATABASE CONFIGURATION ############################
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': join(PROJECT_ROOT, 'dev.sqlite3'),
    }
}

# ##### APPLICATION CONFIGURATION #########################

INSTALLED_APPS = DEFAULT_APPS

# The URL for static files
STATIC_URL = '/dev/static/'
