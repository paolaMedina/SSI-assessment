# Generated by Django 2.2.6 on 2019-10-30 06:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Asignatura', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='asignatura',
            name='codigo',
        ),
    ]
