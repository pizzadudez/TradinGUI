from django_filters.rest_framework import DjangoFilterBackend
from api.models import Banker, Realm, DefaultBanker
from api.serializers import BankerSerializer, RealmSerializer
from rest_framework import generics

from django.http import HttpResponse


class BankerList(generics.ListAPIView):
    queryset = Banker.objects.all()
    serializer_class = BankerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['realm', 'account']


class BankerDetail(generics.RetrieveUpdateAPIView):
    queryset = Banker.objects.all()
    serializer_class = BankerSerializer


class RealmList(generics.ListAPIView):
    queryset = Realm.objects.all()
    serializer_class = RealmSerializer


def restore_default_data(request):
    bankers = Banker.objects.all()
    for banker in bankers:
        default = DefaultBanker.objects.get(id=banker.id)
        banker.trade_confirmation = default.trade_confirmation
        banker.trade_timestamp = default.trade_timestamp
        banker.save()

    return HttpResponse("Success!")

def set_default_data(request):
    DefaultBanker.objects.all().delete()
    bankers = Banker.objects.all()
    for banker in bankers:
        b = DefaultBanker.objects.create(
            id=banker.id,
            name=banker.name,
            realm=banker.realm,
            account=banker.account,
            bank_num=banker.bank_num,
            bank_gold=banker.bank_gold,
            trade_timestamp=banker.trade_timestamp,
            trade_confirmation=banker.trade_confirmation,
        )
        b.save()

    return HttpResponse("Success!")
