# Generated by Django 2.0.4 on 2018-09-26 14:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('proyectos', '0040_auto_20180612_1047'),
    ]

    operations = [
        migrations.CreateModel(
            name='MiembroLiteral',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('puede_ver', models.BooleanField(default=False)),
                ('puede_editar', models.BooleanField(default=False)),
                ('puede_eliminar', models.BooleanField(default=False)),
                ('literal', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='mis_miembros', to='proyectos.Literal')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='mis_literales', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='literal',
            name='miembros',
            field=models.ManyToManyField(related_name='literales', through='proyectos.MiembroLiteral', to=settings.AUTH_USER_MODEL),
        ),
    ]