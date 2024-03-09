using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PCPApi.Entities;

[Table("general_config")]
public class GeneralConfig
{
    [Key]
    [Column("generalConfigId")]
    public int GeneralConfigId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [Column("monthlyWorkDays")]
    public int MonthlyWorkDays { get; set; }

    [Column("dailyWorkHours")]
    public int DailyWorkHours { get; set; }

    [MaxLength(255)]
    [Column("hourlySalary")]
    public string HourlySalary { get; set; }

    [Column("monthlySalary")]
    public int MonthlySalary { get; set; }

    [MaxLength(255)]
    [Column("updated_at")]
    public string UpdatedAt { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}

