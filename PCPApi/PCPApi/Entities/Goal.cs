namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("goals")]
public class Goal
{
    [Key]
    [Column("goalId")]
    public int GoalId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [Column("budgetQuantityGoal")]
    public int BudgetQuantityGoal { get; set; }

    [Column("salesQuantityGoal")]
    public int SalesQuantityGoal { get; set; }

    [Column("incomeGoal")]
    public int IncomeGoal { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}
