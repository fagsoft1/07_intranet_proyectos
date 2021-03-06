# Generated by Django 2.0.4 on 2019-04-08 17:26

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    dependencies = [
        ('sistema_informacion_origen', '0003_sistemainformacionorigen_codigo_amarre'),
        ('clientes', '0013_canaldistribucion_grupocliente_tipoindustria'),
        ('cargues_catalogos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClienteCatalogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('nit', models.CharField(max_length=20)),
                ('nombre', models.CharField(max_length=120)),
                ('forma_pago', models.PositiveIntegerField(max_length=120, null=True)),
                ('es_competencia', models.BooleanField(default=False)),
                ('esta_cerrado', models.BooleanField(default=False)),
                ('no_vender', models.BooleanField(default=False)),
                ('canal', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='mis_empresas', to='clientes.CanalDistribucion')),
                ('cliente_nuevo_nit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='cargues_catalogos.ClienteCatalogo')),
                ('grupo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='mis_empresas', to='clientes.GrupoCliente')),
                ('industria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='mis_empresas', to='clientes.TipoIndustria')),
                ('sistema_informacion', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='sistema_informacion_origen.SistemaInformacionOrigen')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='clientecatalogo',
            unique_together={('sistema_informacion', 'nit')},
        ),
    ]
