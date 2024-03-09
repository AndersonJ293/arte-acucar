namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("goals")]
public class Goal
{
    [Key]
    [Column("goalid")]
    public int GoalId { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [Column("budgetQuantityGoal", TypeName = "numeric(18,2)")]
    public decimal BudgetQuantityGoal { get; set; }

    [Column("salesQuantityGoal", TypeName = "numeric(18,2)")]
    public int SalesQuantityGoal { get; set; }

    [Column("incomeGoal", TypeName = "numeric(18,2)")]
    public decimal IncomeGoal { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}
