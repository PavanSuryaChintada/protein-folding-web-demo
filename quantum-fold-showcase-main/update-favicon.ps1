# Create public directory if it doesn't exist
$publicDir = ".\public"
if (-not (Test-Path -Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir
}

# Download the favicon
$faviconUrl = "https://res.cloudinary.com/dvxwlajla/image/upload/v1761542075/protein_favicon-removebg-preview_gu776i.png"
$outputPath = ".\public\favicon.ico"

Write-Host "Downloading favicon from $faviconUrl..."
Invoke-WebRequest -Uri $faviconUrl -OutFile $outputPath
Write-Host "Favicon downloaded to $outputPath"

# Update index.html
$indexPath = ".\index.html"
if (Test-Path -Path $indexPath) {
    $content = Get-Content -Path $indexPath -Raw
    
    # Add favicon link if it doesn't exist
    if (-not ($content -match 'link rel="icon"')) {
        $headEnd = $content.IndexOf('</head>')
        $newContent = $content.Insert($headEnd, "`n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\" />")
        $content = $newContent
    }
    
    # Replace lovable.dev image URLs with the new favicon
    $content = $content -replace 'https://lovable\.dev/opengraph-image-p98pqg\.png', '/favicon.ico'
    
    # Save the updated content
    $content | Set-Content -Path $indexPath -Encoding UTF8
    Write-Host "Updated $indexPath with new favicon references"
} else {
    Write-Host "Warning: index.html not found at $indexPath"
}

Write-Host "Favicon update complete!"
