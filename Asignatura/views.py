from django.shortcuts import render

# Create your views here.
from Docente.models import Docente
from Estudiante.models import Estudiante
from .models import Asignatura
from .serializers import AsignaturaSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class listado(generics.ListCreateAPIView):
    queryset = Asignatura.objects.all()
    serializer_class = AsignaturaSerializer


class listadoEstudiantes(APIView):
    def get(self, request, pk):
        asignatura = get_object_or_404(Asignatura, pk=pk)
        data = AsignaturaSerializer(asignatura).data
        return Response(data)