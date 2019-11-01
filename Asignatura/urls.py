from django.urls import path
from . import views
urlpatterns = [
    path('api/asignatura/<int:pk>', views.listadoEstudiantes.as_view()),
    path('api/asignaturas/', views.listado.as_view()),
    path('api/matricula', views.listadoMatricula.as_view()),
    path('api/historial', views.historialEstudiante.as_view()),
]
