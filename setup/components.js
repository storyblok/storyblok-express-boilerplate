{
  "components": [
    {
      "name": "button",
      "display_name": null,
      "created_at": "2017-05-30T12:03:31.766Z",
      "id": 44467,
      "schema": "{\"label\":{\"type\":\"text\",\"default_value\":\"Download\"},\"link\":{\"type\":\"text\",\"default_value\":\"#\"},\"icon\":{\"type\":\"custom\",\"source\":\"external\",\"external_datasource\":\"https://raw.githubusercontent.com/storyblok/default-datasources/master/nodejs-demo-icons.json\",\"field_type\":\"icon-selector\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "button_group",
      "display_name": null,
      "created_at": "2017-05-30T12:02:00.405Z",
      "id": 44466,
      "schema": "{\"body\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"button\"]},\"style\":{\"type\":\"options\",\"options\":[{\"value\":\"m-t-50\",\"name\":\"Margin Top Large\"},{\"value\":\"text-center\",\"name\":\"Centered\"}]}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "describe",
      "display_name": null,
      "created_at": "2017-05-29T15:17:20.987Z",
      "id": 44405,
      "schema": "{\"image\":{\"type\":\"image\"},\"title\":{\"type\":\"text\"},\"description\":{\"type\":\"markdown\"},\"body\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"feature_list_small\",\"button_group\"]},\"image_on_left\":{\"type\":\"boolean\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "download",
      "display_name": null,
      "created_at": "2017-05-29T15:21:43.539Z",
      "id": 44411,
      "schema": "{\"title\":{\"type\":\"text\"},\"subtitle\":{\"type\":\"text\"},\"body\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"button_group\",\"testimonial\"]}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "feature",
      "display_name": null,
      "created_at": "2017-05-27T21:23:50.042Z",
      "id": 44387,
      "schema": "{\"title\":{\"type\":\"text\"},\"description\":{\"type\":\"textarea\"},\"icon\":{\"type\":\"custom\",\"external_datasource\":\"\",\"default_value\":\"icon-icon-map-alt\",\"description\":\"See all options in /public/icons/icons-reference.html\",\"field_type\":\"icon-selector\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "feature_list_item",
      "display_name": null,
      "created_at": "2017-05-31T08:12:26.147Z",
      "id": 44502,
      "schema": "{\"icon\":{\"type\":\"custom\",\"field_type\":\"icon-selector\"},\"title\":{\"type\":\"text\"},\"description\":{\"type\":\"textarea\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "feature_list_small",
      "display_name": null,
      "created_at": "2017-05-31T08:03:55.047Z",
      "id": 44501,
      "schema": "{\"body\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"feature_list_item\"]}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "features",
      "display_name": null,
      "created_at": "2017-05-27T20:07:34.379Z",
      "id": 44386,
      "schema": "{\"title\":{\"type\":\"text\"},\"subtitle\":{\"type\":\"text\"},\"image\":{\"type\":\"image\"},\"features\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"feature\"]}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "footer",
      "display_name": null,
      "created_at": "2017-05-31T09:44:20.719Z",
      "id": 44505,
      "schema": "{\"contact_title\":{\"type\":\"text\"},\"contact_link\":{\"type\":\"text\"},\"contact_button\":{\"type\":\"text\"},\"logo\":{\"type\":\"image\"},\"social_title\":{\"type\":\"text\"},\"social_icons\":{\"type\":\"bloks\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "header",
      "display_name": null,
      "created_at": "2017-05-31T09:36:20.378Z",
      "id": 44504,
      "schema": "{\"logo\":{\"type\":\"image\"},\"navigation\":{\"type\":\"bloks\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "hero",
      "display_name": null,
      "created_at": "2017-05-27T19:15:08.978Z",
      "id": 44384,
      "schema": "{\"logo\":{\"type\":\"image\"},\"logo_width\":{\"type\":\"text\"},\"cta_button_label\":{\"type\":\"text\"},\"cta_button_link\":{\"type\":\"text\"},\"title\":{\"type\":\"text\"},\"images\":{\"type\":\"bloks\"},\"background\":{\"type\":\"image\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "how_it_works",
      "display_name": null,
      "created_at": "2017-05-29T15:19:44.090Z",
      "id": 44407,
      "schema": "{\"title\":{\"type\":\"text\"},\"subtitle\":{\"type\":\"text\"},\"body\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"how_to_item\"]}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "how_to_item",
      "display_name": null,
      "created_at": "2017-05-30T10:41:19.925Z",
      "id": 44462,
      "schema": "{\"icon\":{\"type\":\"custom\",\"external_datasource\":\"https://raw.githubusercontent.com/storyblok/default-datasources/master/nodejs-demo-icons.json\",\"field_type\":\"icon-selector\"},\"title\":{\"type\":\"text\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "how_to_works",
      "display_name": null,
      "created_at": "2017-05-29T15:19:20.568Z",
      "id": 44406,
      "schema": "{}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "image",
      "display_name": null,
      "created_at": "2017-05-27T20:01:47.397Z",
      "id": 44385,
      "schema": "{\"source\":{\"type\":\"image\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "newsletter",
      "display_name": null,
      "created_at": "2017-05-29T15:20:17.643Z",
      "id": 44408,
      "schema": "{}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "root",
      "display_name": null,
      "created_at": "2017-05-27T19:12:38.185Z",
      "id": 44383,
      "schema": "{\"color_variation\":{\"type\":\"option\",\"options\":[{\"value\":\"1\",\"name\":\"Purple\"},{\"value\":\"2\",\"name\":\"Blue\"},{\"value\":\"3\",\"name\":\"Orange\"}],\"default_value\":\"1\"},\"header\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"header\"]},\"body\":{\"type\":\"bloks\"},\"footer\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"footer\"]}}",
      "image": null,
      "preview_field": null,
      "is_root": true,
      "is_nestable": true
    },
    {
      "name": "screenshots",
      "display_name": null,
      "created_at": "2017-05-29T15:21:06.694Z",
      "id": 44410,
      "schema": "{\"title\":{\"type\":\"text\"},\"description\":{\"type\":\"markdown\"},\"screenshots\":{\"type\":\"bloks\",\"restrict_components\":true,\"component_whitelist\":[\"image\"]}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "seperator",
      "display_name": null,
      "created_at": "2017-05-30T11:55:17.338Z",
      "id": 44465,
      "schema": "{}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "subscribe",
      "display_name": null,
      "created_at": "2017-05-29T15:20:36.306Z",
      "id": 44409,
      "schema": "{\"title\":{\"type\":\"text\"},\"subtitle\":{\"type\":\"text\"},\"provider\":{\"type\":\"option\",\"options\":[{\"value\":\"getrevue.co\",\"name\":\"getrevue.co\"},{\"value\":\"mailchimp.com\",\"name\":\"mailchimp.com\"}],\"default_value\":\"getrevue.co\"},\"signup_url\":{\"type\":\"text\",\"default_value\":\"//www.getrevue.co/profile/storyblok/add_subscriber\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    },
    {
      "name": "testimonial",
      "display_name": null,
      "created_at": "2017-05-30T20:15:20.868Z",
      "id": 44496,
      "schema": "{\"quote\":{\"type\":\"textarea\"},\"name\":{\"type\":\"text\"},\"company\":{\"type\":\"text\"},\"image\":{\"type\":\"image\"}}",
      "image": null,
      "preview_field": null,
      "is_root": false,
      "is_nestable": true
    }
  ]
}