from django.db import migrations

def create_schedule(apps, schema_editor):
    Schedule = apps.get_model('django_q', 'Schedule')
    Schedule.objects.create(
        func='api.tasks.minha_rotina',
        schedule_type=1, #para contar em minutos
        minutes=15,
        repeats=-1,
        name='Minha rotina de 15 em 15'
    )

class Migration(migrations.Migration):
    dependencies = [
        ('api', '0001_initial'),
        ('django_q', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_schedule),
    ]
