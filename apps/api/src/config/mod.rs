use std::env;

#[derive(Clone, Debug)]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub frontend_url: String,
}

impl Config {
    pub fn from_env() -> Result<Self, Box<dyn std::error::Error>> {
        dotenvy::dotenv().ok();

        let host = env::var("API_HOST").unwrap_or_else(|_| "127.0.0.1".to_string());

        let port = env::var("API_PORT")
            .unwrap_or_else(|_| "3001".to_string())
            .parse::<u16>()?;

        let frontend_url =
            env::var("FRONTEND_URL").unwrap_or_else(|_| "http://localhost:3000".to_string());

        Ok(Self {
            host,
            port,
            frontend_url,
        })
    }
}
