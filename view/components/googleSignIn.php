<head>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <title>Google Auth Login</title>
</head>

<body>
    <!-- <h4>Google Authentication Login Page</h4> -->
    <div id="g_id_onload" data-client_id="<?= getenv("GOOGLE_CLIENT_ID") ?>" data-context="signin" data-ux_mode="popup" data-login_uri="/index.php?action=userSignInGoogle" data-auto_prompt="false"></div>

    <div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="filled_blue" data-text="signin_with" data-size="large" data-locale="en" data-logo_alignment="left"></div>
</body>