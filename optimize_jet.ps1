
Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\ADWAITH\Documents\web\agnitus\public\jet.png"
$destPath = "c:\Users\ADWAITH\Documents\web\agnitus\public\jet_optimized.png"

Write-Host "Processing $sourcePath..."

try {
    $image = [System.Drawing.Image]::FromFile($sourcePath)
    
    # Calculate new dimensions (keep aspect ratio, max width 1500)
    $maxWidth = 1500
    if ($image.Width -gt $maxWidth) {
        $newWidth = $maxWidth
        $newHeight = [int]($image.Height * ($maxWidth / $image.Width))
        
        Write-Host "Resizing from $($image.Width)x$($image.Height) to ${newWidth}x${newHeight}"
        
        $bitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bitmap)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        
        $graph.DrawImage($image, 0, 0, $newWidth, $newHeight)
        
        $bitmap.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $bitmap.Dispose()
        $graph.Dispose()
        Write-Host "Saved optimized image to $destPath"
    } else {
        Write-Host "Image is already small enough. Copying..."
        Copy-Item $sourcePath $destPath
    }
    
    $image.Dispose()
} catch {
    Write-Error "Failed to optimize image: $_"
    exit 1
}
