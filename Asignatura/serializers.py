from rest_framework import serializers
from .models import Asignatura,Matricula
from Estudiante.models import Estudiante
from Estudiante.serializers import EstudianteSerializer
from Docente.serializers import DocenteSerializer


class AsignaturaSerializer(serializers.ModelSerializer):
    docente = DocenteSerializer( read_only=True)
    class Meta:
        model = Asignatura
        fields = '__all__'
        
class MatriculaSerializer(serializers.ModelSerializer):
    estudiante =  EstudianteSerializer(read_only=True)
    asignatura =  AsignaturaSerializer( read_only=True)
    class Meta:
        model = Matricula
        fields = '__all__'

    # def create(self, validated_data):
    #     user = validated_data.get('user')
    #     student = Matricula.objects.create(user=user, grade=grade)
    #     return student
        
