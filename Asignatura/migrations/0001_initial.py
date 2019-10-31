# Generated by Django 2.2.6 on 2019-10-31 21:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Docente', '0001_initial'),
        ('Estudiante', '0002_auto_20191030_2244'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asignatura',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('codigo', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('docente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Docente.Docente')),
                ('estudiantes', models.ManyToManyField(to='Estudiante.Estudiante')),
            ],
        ),
        migrations.CreateModel(
            name='Matricula',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Calificacion', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('asignatura', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Asignatura.Asignatura')),
                ('estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Estudiante.Estudiante')),
            ],
        ),
    ]
