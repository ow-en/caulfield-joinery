use caulfield_api::app;

#[tokio::main]
async fn main() {

    let listener =
        tokio::net::TcpListener::bind("0.0.0.0:3001")
            .await
            .unwrap();

    println!("API running");

    axum::serve(listener, app())
        .await
        .unwrap();

}