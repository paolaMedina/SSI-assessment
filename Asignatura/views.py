from django.shortcuts import render

# Create your views here.
from Docente.models import Docente
from Estudiante.models import Estudiante
from .models import Asignatura, Matricula
from .serializers import AsignaturaSerializer, MatriculaSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class listado(generics.ListCreateAPIView):
    queryset = Asignatura.objects.all()
    serializer_class = AsignaturaSerializer

# class listadoMatricula(APIView):
#     def get(self, request):
#         codigo =self.request.query_params.get('codigo')
#         matricula = get_object_or_404(Matricula, codigo=1)
#         data = MatriculaSerializer(matricula).data
#         return Response(data)

class listadoMatricula(generics.ListAPIView):
    serializer_class = MatriculaSerializer

    def get_queryset(self):
        codigo =self.request.query_params.get('codigo')
        return Matricula.objects.filter(asignatura__codigo=codigo)



class listadoEstudiantes(APIView):
    def get(self, request, pk):
        asignatura = get_object_or_404(Asignatura, pk=pk)
        data = AsignaturaSerializer(asignatura).data
        return Response(data)


