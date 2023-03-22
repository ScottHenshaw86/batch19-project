<?php

class Manager
{
    protected function dbConnect()
    {
        $HOST = getenv("PLANETSCALE_DB_HOST") ?? "localhost";
        $DATABASE = getenv("PLANETSCALE_DB") ?? "batch19_project";
        $USERNAME = getenv("PLANETSCALE_DB_USERNAME") ?? "root";
        $PASSWORD = getenv("PLANETSCALE_DB_PASSWORD") ?? "";
        $SSL_CERT = getenv("PLANETSCALE_SSL_CERT_PATH") ?? "";
        $OPTIONS = array(
            PDO::MYSQL_ATTR_SSL_CA => $SSL_CERT
        );
        $db = new PDO("mysql:host=$HOST;dbname=$DATABASE;charset=utf8", $USERNAME, $PASSWORD, $OPTIONS);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $db;
    }
}
