export const UserFreezeData =[
	{
		"loan_dpd" : 10,
		"user_id" : 3730938,
		"mobile" : "82136390222",
		"parent_user_id" : 3701311,
		"name" : "Mega Berlian",
		"updated_at" : "2024-11-17 01:07:07",
		"sum_money" : 125000000,
		"limit_money" : 159915
	},
	{
		"loan_dpd" : 1,
		"user_id" : 3752026,
		"mobile" : "85237146664",
		"parent_user_id" : 3701313,
		"name" : "Aneka Motor",
		"updated_at" : "2024-12-08 01:07:15",
		"sum_money" : 165000000,
		"limit_money" : 48375635
	},
	{
		"loan_dpd" : 1,
		"user_id" : 3760767,
		"mobile" : "8123838788",
		"parent_user_id" : 3701313,
		"name" : "UD Uni Putra",
		"updated_at" : "2024-12-07 01:07:16",
		"sum_money" : 165000000,
		"limit_money" : 165000000
	},
	{
		"loan_dpd" : 34,
		"user_id" : 3864810,
		"mobile" : "85225224505",
		"parent_user_id" : 3701312,
		"name" : "AHASS Mandhing Baru",
		"updated_at" : "2024-12-04 11:08:10",
		"sum_money" : 137500000,
		"limit_money" : 105044573
	},
	{
		"loan_dpd" : 2,
		"user_id" : 4302948,
		"mobile" : "85103084625",
		"parent_user_id" : 3701311,
		"name" : "MEGA BERLIAN / SRI HARTITI",
		"updated_at" : "2024-11-18 12:09:22",
		"sum_money" : 1,
		"limit_money" : -38274743
	},
	{
		"loan_dpd" : 6,
		"user_id" : 4454063,
		"mobile" : "85868403212",
		"parent_user_id" : 3701312,
		"name" : "Dekso Motor",
		"updated_at" : "2024-12-05 20:50:21",
		"sum_money" : 40000000,
		"limit_money" : 16329163
	},
	{
		"loan_dpd" : 5,
		"user_id" : 5163494,
		"mobile" : "87716403780",
		"parent_user_id" : 3701313,
		"name" : "Palu Jaya Motor",
		"updated_at" : "2024-11-30 01:07:13",
		"sum_money" : 100000000,
		"limit_money" : 4897880
	},
	{
		"loan_dpd" : 5,
		"user_id" : 5553452,
		"mobile" : "882003292207",
		"parent_user_id" : 3701311,
		"name" : "Galuh Motor",
		"updated_at" : "2024-12-01 01:05:52",
		"sum_money" : 100000000,
		"limit_money" : 14177839
	},
	{
		"loan_dpd" : 5,
		"user_id" : 5553552,
		"mobile" : "895373153030",
		"parent_user_id" : 3701311,
		"name" : "Galuh 2",
		"updated_at" : "2024-11-29 09:31:49",
		"sum_money" : 75000000,
		"limit_money" : 3581248
	},
	{
		"loan_dpd" : 11,
		"user_id" : 6508107,
		"mobile" : "8121584321",
		"parent_user_id" : 3701312,
		"name" : "CV Kusuma Mataram",
		"updated_at" : "2024-11-24 01:07:02",
		"sum_money" : 151000000,
		"limit_money" : 55310783
	},
	{
		"loan_dpd" : 4,
		"user_id" : 6508108,
		"mobile" : "85226943432",
		"parent_user_id" : 3701311,
		"name" : "Bagus Motor 1",
		"updated_at" : "2024-12-08 01:07:15",
		"sum_money" : 400000000,
		"limit_money" : 10468255
	},
	{
		"loan_dpd" : 15,
		"user_id" : 6785416,
		"mobile" : "81398300556",
		"parent_user_id" : 6194810,
		"name" : "Mansyur Motor 2",
		"updated_at" : "2024-11-28 08:41:26",
		"sum_money" : 200000000,
		"limit_money" : 99113245
	},
	{
		"loan_dpd" : 1,
		"user_id" : 7415951,
		"mobile" : "85700002157",
		"parent_user_id" : 3701312,
		"name" : "Galur Honda Motor",
		"updated_at" : "2024-12-08 01:07:15",
		"sum_money" : 60000000,
		"limit_money" : 13097667
	},
	{
		"loan_dpd" : 4,
		"user_id" : 8690847,
		"mobile" : "85368212323",
		"parent_user_id" : 8658617,
		"name" : "Tb Taruna Jaya",
		"updated_at" : "2024-11-28 16:38:10",
		"sum_money" : 250000000,
		"limit_money" : 85750000
	},
	{
		"loan_dpd" : 4,
		"user_id" : 9487097,
		"mobile" : "81236416516",
		"parent_user_id" : 3701313,
		"name" : "Gunawan Motor",
		"updated_at" : "2024-12-07 01:07:16",
		"sum_money" : 100000000,
		"limit_money" : 7554046
	}
]



// select count(tu.name) as loan_dpd, tu.user_id,
// tu.parent_user_id, tu.name, tc.updated_at, tc.sum_money, 
// (tc.sum_money-(tc.freeze_money+tc.use_money)) as limit_money
// from business.tb_credit_user_account tc
// join business.tb_user tu on tu.user_id =  tc.user_id
// join business.tb_loan tl on tl.user_id = tu.user_id
// where tc.status = 2 and tl.loan_state = 14
// group by tu.name order by tu.user_id;

// select count(tu.name) as loan_dpd,
// tu.parent_user_id, tu.name, tl.created_at, tl.term from business.tb_credit_user_account tc
// join business.tb_user tu on tu.user_id =  tc.user_id
// join business.tb_loan tl on tl.user_id = tu.user_id
// where tc.status = 2 and tl.loan_state = 14
// group by tu.parent_user_id order by tu.user_id;