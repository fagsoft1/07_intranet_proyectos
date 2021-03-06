# Generated by Django 2.0.4 on 2019-04-11 16:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cargues_catalogos', '0004_auto_20190411_1116'),
    ]

    operations = [
        migrations.CreateModel(
            name='LineaVendedorBiable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=120, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='sucursalcatalogo',
            name='colaborador',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='clientes', to='cargues_catalogos.ColaboradorCatalogo'),
        ),
        migrations.AddField(
            model_name='sucursalcatalogo',
            name='colaborador_real',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='clientes_asignados', to='cargues_catalogos.ColaboradorCatalogo'),
        ),
        migrations.AddField(
            model_name='colaboradorcentrocostocatalogo',
            name='linea',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='cargues_catalogos.LineaVendedorBiable'),
        ),
    ]
