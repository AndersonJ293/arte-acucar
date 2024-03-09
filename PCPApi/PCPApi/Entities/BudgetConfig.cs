namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("budget_config")]
public class BudgetConfig
{
    [Key]
    [Column("budgetconfigid")]
    public int BudgetConfigId { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [Column("budgetmessage")]
    [MaxLength(1000)]
    public string? BudgetMessage { get; set; }

    [Column("budgetvalidity")]
    public int BudgetValidity { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("companyId")]
    public Company Company { get; set; }
}
