namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("budget_config")]
public class BudgetConfig
{
    [Key]
    [Column("budgetConfigId")]
    public int BudgetConfigId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("budgetMessage")]
    public string BudgetMessage { get; set; }

    [Column("budgetValidity")]
    public int BudgetValidity { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}
