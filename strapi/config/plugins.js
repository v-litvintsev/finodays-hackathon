"use strict";

module.exports = () => ({
  "entity-relationship-chart": {
    enabled: true,
    config: {
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::transfer-token-permission",
        "admin::transfer-token",
        "admin::api-token-permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::upload.folder",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
      ],
    },
  },
});
