# Generated by Django 4.1.3 on 2022-11-16 16:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tradeInfo', '0002_tradeinfo_fdata'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tradeinfo',
            name='fdata',
        ),
    ]
