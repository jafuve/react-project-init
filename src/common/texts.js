export const SystemConstants = {
    BACKEND: {
        API: process.env.REACT_APP_BACKEND_API_URL_BASE
    }
}

export const Texts = {
    ADMIN: {
        HOME: "Inicio",
        PRODUCTS: {
            TITLE: "Productos",
            CARD_TITLE: "Productos",
            CREATE_BUTTON: "Crear producto",
            SETTINGS_BUTTON: "Propiedades producto",
            UPPER_LEVEL: "",
            TABLE: {
                HEADERS: {
                    ID: 'Id',
                    ID_KEY: 'id_product',
                    NAME: 'Producto',
                    NAME_KEY: 'name',
                    MEASSURE: 'Presentación',
                    MEASSURE_KEY: 'meassure',
                    BRAND: 'Marca',
                    BRAND_KEY: 'brand',
                    CATEGORY: 'Categoría',
                    CATEGORY_KEY: 'category',
                    PRICE: 'Precio',
                    PRICE_KEY: 'price',
                }
            },
            CREATE_MODAL: {
                TITLE: "Crear producto"
            }
        },
        PRODUCT_SETTINGS: {
            TITLE: "Propiedades",
            CARD_TITLE: "Propiedades",
            UPPER_LEVEL: "Productos",
            BRAND: {
                CREATE_BUTTON: "Crear marca",
                TABLE: {
                    HEADERS: {
                        ID: 'Id',
                        ID_KEY: 'id_product_brand',
                        NAME: 'Marca',
                        NAME_KEY: 'product_brand',
                        STATUS: 'Estado',
                        STATUS_KEY: 'is_active'
                    }
                },
                CREATE_MODAL: {
                    TITLE: "Crear marca",
                    LABEL: "Ingrese marca",
                    PLACEHOLDER: "Ingrese marca",
                    ERROR: "Marca es requerida"
                }
            },
            CATEGORY: {
                CREATE_BUTTON: "Crear categoría",
                TABLE: {
                    HEADERS: {
                        ID: 'Id',
                        ID_KEY: 'id_product_category',
                        NAME: 'Catgoría',
                        NAME_KEY: 'product_category',
                        STATUS: 'Estado',
                        STATUS_KEY: 'is_active'
                    }
                },
                CREATE_MODAL: {
                    TITLE: "Crear categoría",
                    LABEL: "Ingrese categoría",
                    PLACEHOLDER: "Ingrese categoría",
                    ERROR: "Categoría es requerida"
                }
            },
            MEASSURE: {
                CREATE_BUTTON: "Crear presentación",
                TABLE: {
                    HEADERS: {
                        ID: 'Id',
                        ID_KEY: 'id_product_meassure',
                        NAME: 'Presentación',
                        NAME_KEY: 'product_meassure',
                        STATUS: 'Estado',
                        STATUS_KEY: 'is_active'
                    }
                },
                CREATE_MODAL: {
                    TITLE: "Crear presentación",
                    LABEL: "Ingrese presentación",
                    PLACEHOLDER: "Ingrese presentación",
                    ERROR: "Presentación es requerida"
                }
            }
        },
        SUPPLIERS: {
            TITLE: "Proveedores",
            CARD_TITLE: "Proveedores",
            CREATE_BUTTON: "Crear proveedor",
            UPPER_LEVEL: "",
            TABLE: {
                HEADERS: {
                    ID: 'Id',
                    ID_KEY: 'id_supplier',
                    NAME: 'Proveedor',
                    NAME_KEY: 'name',
                    CONTACT: 'Contacto',
                    CONTACT_KEY: 'contact_name',
                    CONTACT_PHONE: 'Teléfono',
                    CONTACT_PHONE_KEY: 'contact_phone',
                }
            },
            CREATE_MODAL: {
                TITLE: "Crear proveedor"
            }
        },
        CUSTOMERS: {
            TITLE: "Clientes",
            CARD_TITLE: "Clientes",
            CREATE_BUTTON: "Crear cliente",
            UPPER_LEVEL: "",
            TABLE: {
                HEADERS: {
                    ID: 'Id',
                    ID_KEY: 'id_customer',
                    NAME: 'Cliente',
                    NAME_KEY: 'name',
                    NAME: 'Comercial',
                    NAME_KEY: 'trade_name',
                    CONTACT: 'Contacto',
                    CONTACT_KEY: 'contact_name',
                    CONTACT_PHONE: 'Teléfono',
                    CONTACT_PHONE_KEY: 'contact_phone',
                }
            },
            CREATE_MODAL: {
                TITLE: "Crear cliente"
            }
        },
    }
}