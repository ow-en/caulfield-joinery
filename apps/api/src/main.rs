use caulfield_api::{app, config::Config};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();

    let config = Config::from_env()?;

    let address = format!("{}:{}", config.host, config.port);

    let listener = tokio::net::TcpListener::bind(&address).await?;

    tracing::info!(
        address = %address,
        "Caulfield Joinery API started"
    );

    axum::serve(listener, app(&config)).await?;

    Ok(())
}
