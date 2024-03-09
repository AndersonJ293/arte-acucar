using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

[Table("budget_images")]
public class BudgetImage
{
    [Key]
    [Column("budget_imageid")]
    public int BudgetImageId { get; set; }

    [Column("budgetid")]
    [Required]
    public int BudgetId { get; set; }

    [Column("urlimage")]
    [MaxLength(255)]
    public string? UrlImage { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }
}
