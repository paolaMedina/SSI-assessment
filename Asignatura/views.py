from django.shortcuts import render

# Create your views here.
from Docente.models import Docente
from Estudiante.models import Estudiante
from .models import Asignatura
from .serializers import AsignaturaSerializer
from rest_framework import generics


class listado(generics.ListCreateAPIView):
    queryset = Asignatura.objects.all()
    serializer_class = AsignaturaSerializer
