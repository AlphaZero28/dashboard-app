from .models import Dashboard
from rest_framework import serializers


class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = '__all__'
#
# class SubscriptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Subscription
#         fields = ['mac_address', 'start_date', 'end_date']