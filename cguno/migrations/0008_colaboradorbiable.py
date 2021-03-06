# Generated by Django 2.0.1 on 2018-01-30 17:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cguno', '0007_auto_20180130_1703'),
    ]

    operations = [
        migrations.CreateModel(
            name='ColaboradorBiable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cedula', models.CharField(max_length=20, unique=True)),
                ('nombres', models.CharField(blank=True, max_length=200, null=True)),
                ('apellidos', models.CharField(blank=True, max_length=200, null=True)),
                ('en_proyectos', models.BooleanField(default=False)),
                ('es_cguno', models.BooleanField(default=False)),
                ('usuario', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, related_name='colaborador', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Colaborador',
                'verbose_name_plural': 'Colaboradores',
            },
        ),
    ]
