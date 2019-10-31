from rest_framework import serializers
from .models import Asignatura,Matricula
from Estudiante.models import Estudiante
from Estudiante.serializers import EstudianteSerializer


class AsignaturaSerializer(serializers.ModelSerializer):
    estudiantes = EstudianteSerializer(many=True, read_only=True)
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     if self.context['request'].method == 'GET':
    #         self.fields['estudiantes'] = EstudianteSerializer(many=True)
    class Meta:
        model = Asignatura
        fields = '__all__'
        
class MatriculaSerializer(serializers.ModelSerializer):
    estudiante =  EstudianteSerializer(many=True)
    asignatura =  AsignaturaSerializer(many=True)
    class Meta:
        model = Matricula
        fields = '__all__'
        
