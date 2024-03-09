using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

[Table("product_images")]
public class ProductImage
{
    [Key]
    [Column("product_imageid")]
    public int ProductImageId { get; set; }

    [Column("productid")]
    [Required]
    public int ProductId { get; set; }

    [Column("urlimage")]
    [MaxLength(255)]
    public string? UrlImage { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }
}
