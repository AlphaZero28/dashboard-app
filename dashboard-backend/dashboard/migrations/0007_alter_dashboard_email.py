# Generated by Django 4.2 on 2023-05-24 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0006_alter_dashboard_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dashboard',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
