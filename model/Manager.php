<?php

class Manager
{
    protected function dbConnect()
    {

        $HOST = getenv("PLANETSCALE_DB_HOST");
        $DATABASE = getenv("PLANETSCALE_DB");
        $USERNAME = getenv("PLANETSCALE_DB_USERNAME");
        $PASSWORD = getenv("PLANETSCALE_DB_PASSWORD") ? getenv("PLANETSCALE_DB_PASSWORD") : "";
        $SSL_CERT = getenv("PLANETSCALE_SSL_CERT_PATH");
        if ($SSL_CERT) {
            $OPTIONS = array(
                PDO::MYSQL_ATTR_SSL_CA => $SSL_CERT,
                PDO::MYSQL_ATTR_INIT_COMMAND => 'SET sql_mode="TRADITIONAL"'
            );
        } else {
            $OPTIONS = array(
                PDO::MYSQL_ATTR_INIT_COMMAND => 'SET sql_mode="TRADITIONAL"'
            );
        }
        $db = new PDO("mysql:host=$HOST;dbname=$DATABASE;charset=utf8", $USERNAME, $PASSWORD, $OPTIONS);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $db;
    }
}
