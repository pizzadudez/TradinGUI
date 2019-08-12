class MainRouter(object):
    """Assigns external_db for read/write operations for models."""

    def db_for_read(self, model, **hints):
        if model._meta.label in ['api.Banker', 'api.Realm']:
            return 'bankers'

    def db_for_write(self, model, **hints):
        if model._meta.label in ['api.Banker', 'api.Realm']:
            return 'bankers'