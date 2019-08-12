from rest_framework import serializers
from api.models import Banker, Realm


class BankerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banker
        fields = [
            'id',
            'name',
            'realm',
            'account',
            'bank_num',
            'bank_gold',
            'trade_timestamp',
            'trade_confirmation',
        ]

class RealmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realm
        fields = ['id', 'realm', 'code', 'price_per_mil']