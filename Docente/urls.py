
from django.urls import path
from . import views
urlpatterns = [
    path('api/docentes/<int:pk>', views.PollDetail.as_view()),
]
